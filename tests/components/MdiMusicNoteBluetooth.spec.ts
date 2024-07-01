
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMusicNoteBluetooth from "../../src/components/MdiMusicNoteBluetooth.vue";

test("MdiMusicNoteBluetooth snapshot", () => {
  const wrapper = mount(MdiMusicNoteBluetooth, {});
  expect(wrapper.html()).toMatchSnapshot();
});
