
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHeartMultiple from "../../src/components/MdiHeartMultiple.vue";

test("MdiHeartMultiple snapshot", () => {
  const wrapper = mount(MdiHeartMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
