
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCat from "../../src/components/MdiCat.vue";

test("MdiCat snapshot", () => {
  const wrapper = mount(MdiCat, {});
  expect(wrapper.html()).toMatchSnapshot();
});
