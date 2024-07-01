
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmailHeartOutline from "../../src/components/MdiEmailHeartOutline.vue";

test("MdiEmailHeartOutline snapshot", () => {
  const wrapper = mount(MdiEmailHeartOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
