
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHubspot from "../../src/components/MdiHubspot.vue";

test("MdiHubspot snapshot", () => {
  const wrapper = mount(MdiHubspot, {});
  expect(wrapper.html()).toMatchSnapshot();
});
