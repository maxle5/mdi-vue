
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPolaroid from "../../src/components/MdiPolaroid.vue";

test("MdiPolaroid snapshot", () => {
  const wrapper = mount(MdiPolaroid, {});
  expect(wrapper.html()).toMatchSnapshot();
});
