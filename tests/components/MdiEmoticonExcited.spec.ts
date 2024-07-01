
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmoticonExcited from "../../src/components/MdiEmoticonExcited.vue";

test("MdiEmoticonExcited snapshot", () => {
  const wrapper = mount(MdiEmoticonExcited, {});
  expect(wrapper.html()).toMatchSnapshot();
});
