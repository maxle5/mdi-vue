
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGraphql from "../../src/components/MdiGraphql.vue";

test("MdiGraphql snapshot", () => {
  const wrapper = mount(MdiGraphql, {});
  expect(wrapper.html()).toMatchSnapshot();
});
