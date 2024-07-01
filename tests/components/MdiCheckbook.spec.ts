
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCheckbook from "../../src/components/MdiCheckbook.vue";

test("MdiCheckbook snapshot", () => {
  const wrapper = mount(MdiCheckbook, {});
  expect(wrapper.html()).toMatchSnapshot();
});
