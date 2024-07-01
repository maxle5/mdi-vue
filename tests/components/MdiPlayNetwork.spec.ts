
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPlayNetwork from "../../src/components/MdiPlayNetwork.vue";

test("MdiPlayNetwork snapshot", () => {
  const wrapper = mount(MdiPlayNetwork, {});
  expect(wrapper.html()).toMatchSnapshot();
});
