
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNewspaperVariant from "../../src/components/MdiNewspaperVariant.vue";

test("MdiNewspaperVariant snapshot", () => {
  const wrapper = mount(MdiNewspaperVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
