
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHelpNetworkOutline from "../../src/components/MdiHelpNetworkOutline.vue";

test("MdiHelpNetworkOutline snapshot", () => {
  const wrapper = mount(MdiHelpNetworkOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
