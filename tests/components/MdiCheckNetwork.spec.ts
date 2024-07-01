
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCheckNetwork from "../../src/components/MdiCheckNetwork.vue";

test("MdiCheckNetwork snapshot", () => {
  const wrapper = mount(MdiCheckNetwork, {});
  expect(wrapper.html()).toMatchSnapshot();
});
