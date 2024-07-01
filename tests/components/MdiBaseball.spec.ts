
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBaseball from "../../src/components/MdiBaseball.vue";

test("MdiBaseball snapshot", () => {
  const wrapper = mount(MdiBaseball, {});
  expect(wrapper.html()).toMatchSnapshot();
});
