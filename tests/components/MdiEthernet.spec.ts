
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEthernet from "../../src/components/MdiEthernet.vue";

test("MdiEthernet snapshot", () => {
  const wrapper = mount(MdiEthernet, {});
  expect(wrapper.html()).toMatchSnapshot();
});
