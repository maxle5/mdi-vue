
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDoorbell from "../../src/components/MdiDoorbell.vue";

test("MdiDoorbell snapshot", () => {
  const wrapper = mount(MdiDoorbell, {});
  expect(wrapper.html()).toMatchSnapshot();
});
