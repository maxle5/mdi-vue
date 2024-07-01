
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBluetoothAudio from "../../src/components/MdiBluetoothAudio.vue";

test("MdiBluetoothAudio snapshot", () => {
  const wrapper = mount(MdiBluetoothAudio, {});
  expect(wrapper.html()).toMatchSnapshot();
});
