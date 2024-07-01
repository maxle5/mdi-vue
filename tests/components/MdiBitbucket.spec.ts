
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBitbucket from "../../src/components/MdiBitbucket.vue";

test("MdiBitbucket snapshot", () => {
  const wrapper = mount(MdiBitbucket, {});
  expect(wrapper.html()).toMatchSnapshot();
});
