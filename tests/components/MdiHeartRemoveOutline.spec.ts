
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHeartRemoveOutline from "../../src/components/MdiHeartRemoveOutline.vue";

test("MdiHeartRemoveOutline snapshot", () => {
  const wrapper = mount(MdiHeartRemoveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
