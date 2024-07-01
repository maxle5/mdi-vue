
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCorn from "../../src/components/MdiCorn.vue";

test("MdiCorn snapshot", () => {
  const wrapper = mount(MdiCorn, {});
  expect(wrapper.html()).toMatchSnapshot();
});
