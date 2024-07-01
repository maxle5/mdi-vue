
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookHeartOutline from "../../src/components/MdiBookHeartOutline.vue";

test("MdiBookHeartOutline snapshot", () => {
  const wrapper = mount(MdiBookHeartOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
