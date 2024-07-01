
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFireHydrant from "../../src/components/MdiFireHydrant.vue";

test("MdiFireHydrant snapshot", () => {
  const wrapper = mount(MdiFireHydrant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
