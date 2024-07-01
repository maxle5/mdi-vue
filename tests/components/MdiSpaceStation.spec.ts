
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSpaceStation from "../../src/components/MdiSpaceStation.vue";

test("MdiSpaceStation snapshot", () => {
  const wrapper = mount(MdiSpaceStation, {});
  expect(wrapper.html()).toMatchSnapshot();
});
