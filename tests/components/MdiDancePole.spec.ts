
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDancePole from "../../src/components/MdiDancePole.vue";

test("MdiDancePole snapshot", () => {
  const wrapper = mount(MdiDancePole, {});
  expect(wrapper.html()).toMatchSnapshot();
});
