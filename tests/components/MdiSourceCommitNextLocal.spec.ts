
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSourceCommitNextLocal from "../../src/components/MdiSourceCommitNextLocal.vue";

test("MdiSourceCommitNextLocal snapshot", () => {
  const wrapper = mount(MdiSourceCommitNextLocal, {});
  expect(wrapper.html()).toMatchSnapshot();
});
