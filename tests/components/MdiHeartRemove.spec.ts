
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHeartRemove from "../../src/components/MdiHeartRemove.vue";

test("MdiHeartRemove snapshot", () => {
  const wrapper = mount(MdiHeartRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
