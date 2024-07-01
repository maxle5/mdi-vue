
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiJquery from "../../src/components/MdiJquery.vue";

test("MdiJquery snapshot", () => {
  const wrapper = mount(MdiJquery, {});
  expect(wrapper.html()).toMatchSnapshot();
});
