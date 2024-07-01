
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGlobeLight from "../../src/components/MdiGlobeLight.vue";

test("MdiGlobeLight snapshot", () => {
  const wrapper = mount(MdiGlobeLight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
