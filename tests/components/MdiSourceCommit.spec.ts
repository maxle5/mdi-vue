
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSourceCommit from "../../src/components/MdiSourceCommit.vue";

test("MdiSourceCommit snapshot", () => {
  const wrapper = mount(MdiSourceCommit, {});
  expect(wrapper.html()).toMatchSnapshot();
});
