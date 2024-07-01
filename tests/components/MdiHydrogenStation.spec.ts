
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHydrogenStation from "../../src/components/MdiHydrogenStation.vue";

test("MdiHydrogenStation snapshot", () => {
  const wrapper = mount(MdiHydrogenStation, {});
  expect(wrapper.html()).toMatchSnapshot();
});
