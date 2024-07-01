
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSaxophone from "../../src/components/MdiSaxophone.vue";

test("MdiSaxophone snapshot", () => {
  const wrapper = mount(MdiSaxophone, {});
  expect(wrapper.html()).toMatchSnapshot();
});
