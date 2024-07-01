
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPlusNetwork from "../../src/components/MdiPlusNetwork.vue";

test("MdiPlusNetwork snapshot", () => {
  const wrapper = mount(MdiPlusNetwork, {});
  expect(wrapper.html()).toMatchSnapshot();
});
