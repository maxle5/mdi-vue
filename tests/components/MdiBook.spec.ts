
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBook from "../../src/components/MdiBook.vue";

test("MdiBook snapshot", () => {
  const wrapper = mount(MdiBook, {});
  expect(wrapper.html()).toMatchSnapshot();
});
