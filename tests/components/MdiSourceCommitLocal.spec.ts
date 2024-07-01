
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSourceCommitLocal from "../../src/components/MdiSourceCommitLocal.vue";

test("MdiSourceCommitLocal snapshot", () => {
  const wrapper = mount(MdiSourceCommitLocal, {});
  expect(wrapper.html()).toMatchSnapshot();
});
