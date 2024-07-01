
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStorageTankOutline from "../../src/components/MdiStorageTankOutline.vue";

test("MdiStorageTankOutline snapshot", () => {
  const wrapper = mount(MdiStorageTankOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
