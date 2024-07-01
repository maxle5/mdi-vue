
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWateringCan from "../../src/components/MdiWateringCan.vue";

test("MdiWateringCan snapshot", () => {
  const wrapper = mount(MdiWateringCan, {});
  expect(wrapper.html()).toMatchSnapshot();
});
