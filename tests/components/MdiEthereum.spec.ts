
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEthereum from "../../src/components/MdiEthereum.vue";

test("MdiEthereum snapshot", () => {
  const wrapper = mount(MdiEthereum, {});
  expect(wrapper.html()).toMatchSnapshot();
});
