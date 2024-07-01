
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiElectronFramework from "../../src/components/MdiElectronFramework.vue";

test("MdiElectronFramework snapshot", () => {
  const wrapper = mount(MdiElectronFramework, {});
  expect(wrapper.html()).toMatchSnapshot();
});
