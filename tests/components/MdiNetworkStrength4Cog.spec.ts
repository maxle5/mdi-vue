
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNetworkStrength4Cog from "../../src/components/MdiNetworkStrength4Cog.vue";

test("MdiNetworkStrength4Cog snapshot", () => {
  const wrapper = mount(MdiNetworkStrength4Cog, {});
  expect(wrapper.html()).toMatchSnapshot();
});
