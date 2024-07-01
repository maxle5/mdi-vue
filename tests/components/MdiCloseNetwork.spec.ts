
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCloseNetwork from "../../src/components/MdiCloseNetwork.vue";

test("MdiCloseNetwork snapshot", () => {
  const wrapper = mount(MdiCloseNetwork, {});
  expect(wrapper.html()).toMatchSnapshot();
});
