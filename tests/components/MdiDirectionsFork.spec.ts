
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDirectionsFork from "../../src/components/MdiDirectionsFork.vue";

test("MdiDirectionsFork snapshot", () => {
  const wrapper = mount(MdiDirectionsFork, {});
  expect(wrapper.html()).toMatchSnapshot();
});
