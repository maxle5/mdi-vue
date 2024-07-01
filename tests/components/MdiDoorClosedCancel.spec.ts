
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDoorClosedCancel from "../../src/components/MdiDoorClosedCancel.vue";

test("MdiDoorClosedCancel snapshot", () => {
  const wrapper = mount(MdiDoorClosedCancel, {});
  expect(wrapper.html()).toMatchSnapshot();
});
