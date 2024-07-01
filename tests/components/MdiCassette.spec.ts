
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCassette from "../../src/components/MdiCassette.vue";

test("MdiCassette snapshot", () => {
  const wrapper = mount(MdiCassette, {});
  expect(wrapper.html()).toMatchSnapshot();
});
