
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiConsoleNetwork from "../../src/components/MdiConsoleNetwork.vue";

test("MdiConsoleNetwork snapshot", () => {
  const wrapper = mount(MdiConsoleNetwork, {});
  expect(wrapper.html()).toMatchSnapshot();
});
