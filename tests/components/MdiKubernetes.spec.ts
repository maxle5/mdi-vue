
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiKubernetes from "../../src/components/MdiKubernetes.vue";

test("MdiKubernetes snapshot", () => {
  const wrapper = mount(MdiKubernetes, {});
  expect(wrapper.html()).toMatchSnapshot();
});
