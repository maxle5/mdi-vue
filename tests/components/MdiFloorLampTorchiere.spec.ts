
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFloorLampTorchiere from "../../src/components/MdiFloorLampTorchiere.vue";

test("MdiFloorLampTorchiere snapshot", () => {
  const wrapper = mount(MdiFloorLampTorchiere, {});
  expect(wrapper.html()).toMatchSnapshot();
});
