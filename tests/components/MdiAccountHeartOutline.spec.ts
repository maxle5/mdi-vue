
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountHeartOutline from "../../src/components/MdiAccountHeartOutline.vue";

test("MdiAccountHeartOutline snapshot", () => {
  const wrapper = mount(MdiAccountHeartOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
