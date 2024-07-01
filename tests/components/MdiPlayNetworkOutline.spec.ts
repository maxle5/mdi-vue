
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPlayNetworkOutline from "../../src/components/MdiPlayNetworkOutline.vue";

test("MdiPlayNetworkOutline snapshot", () => {
  const wrapper = mount(MdiPlayNetworkOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
