
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGoodreads from "../../src/components/MdiGoodreads.vue";

test("MdiGoodreads snapshot", () => {
  const wrapper = mount(MdiGoodreads, {});
  expect(wrapper.html()).toMatchSnapshot();
});
