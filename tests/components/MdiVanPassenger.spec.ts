
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVanPassenger from "../../src/components/MdiVanPassenger.vue";

test("MdiVanPassenger snapshot", () => {
  const wrapper = mount(MdiVanPassenger, {});
  expect(wrapper.html()).toMatchSnapshot();
});
