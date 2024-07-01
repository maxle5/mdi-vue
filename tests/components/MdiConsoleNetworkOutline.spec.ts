
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiConsoleNetworkOutline from "../../src/components/MdiConsoleNetworkOutline.vue";

test("MdiConsoleNetworkOutline snapshot", () => {
  const wrapper = mount(MdiConsoleNetworkOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
