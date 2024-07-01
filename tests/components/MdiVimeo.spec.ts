
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVimeo from "../../src/components/MdiVimeo.vue";

test("MdiVimeo snapshot", () => {
  const wrapper = mount(MdiVimeo, {});
  expect(wrapper.html()).toMatchSnapshot();
});
