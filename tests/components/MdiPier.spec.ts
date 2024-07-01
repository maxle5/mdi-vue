
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPier from "../../src/components/MdiPier.vue";

test("MdiPier snapshot", () => {
  const wrapper = mount(MdiPier, {});
  expect(wrapper.html()).toMatchSnapshot();
});
