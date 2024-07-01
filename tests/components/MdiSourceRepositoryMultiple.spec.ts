
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSourceRepositoryMultiple from "../../src/components/MdiSourceRepositoryMultiple.vue";

test("MdiSourceRepositoryMultiple snapshot", () => {
  const wrapper = mount(MdiSourceRepositoryMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
